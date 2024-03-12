import { Wallet, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Clipboard } from "@phosphor-icons/react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GridLoader } from "react-spinners";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Meteors } from "../ui/meteors";
import OverlayMeteors from "../ui/OverlayMeteors";

const ConnectButton = () => {
  // const anchorWallet = useAnchorWallet();
  const { select, wallets, publicKey, disconnect, connecting, connected } =
    useWallet();
  const { toast, dismiss } = useToast();

  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);

  useEffect(() => {
    if (publicKey) {
      const { id } = toast({
        title: `Connected to  ${
          selectedWallet?.adapter.name ? selectedWallet.adapter.name : "your"
        } wallet`,
        description: `Selected wallet with public key: ${computeWalletName(
          publicKey.toBase58()
        )}`,
      });
      setTimeout(() => {
        dismiss(id);
      }, 3000);
    }
  }, [connected, selectedWallet, publicKey]);
  const [copied, setIsCopied] = useState(false);

  const computeWalletName = (pubKey: string) =>
    pubKey.slice(0, 4) + "..." + pubKey.slice(-4);

  const handleCopyPubKey = () => {
    if (!publicKey) return;
    navigator.clipboard.writeText(publicKey.toBase58());
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  const handleSelectWallet = (wallet: Wallet) => {
    select(wallet.adapter.name);
    setSelectedWallet(wallet);
  };

  if (publicKey)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="text-xl">Profile</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <button onClick={handleCopyPubKey}>
              {copied ? (
                "Copied!"
              ) : (
                <div className="flex items-center gap-1 hover:text-white">
                  {computeWalletName(publicKey.toBase58())}
                  <Clipboard size={20} weight="duotone" />
                </div>
              )}
            </button>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <WalletDisconnectButton
              onClick={() => {
                const { id } = toast({
                  title: "Disconnected",
                  description: `Disconnected wallet with public key: ${computeWalletName(
                    publicKey.toBase58()
                  )}`,
                });
                setTimeout(() => {
                  dismiss(id);
                }, 3000);
              }}
            />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

  return (
    <>
      <Dialog>
        <DialogTrigger>
          {/* <Button
            borderRadius="1.1rem"
            className="bg-footer_blue/80 text-white  text-[16px] cursor-pointer font-semibold hover:bg-footer_blue_lighter/70"
          >
            Connect wallet
          </Button> */}
          <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none ">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#393BB2_0%,#ad70fa_50%,#393BB2_100%)]" />
            <span className=" whitespace-nowrap inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-footer_blue_lighter hover:bg-footer_blue_lighter/50 px-6 py-1 text-md font-medium text-white backdrop-blur-3xl">
              Connect wallet
            </span>
          </div>
        </DialogTrigger>
        <DialogContent className="text-white sm:max-w-[350px] bg-footer_blue min-h-[200px] p-0 pb-4 sm:pb-2 rounded-t-2xl md:rounded-2xl ">
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
          <div className="absolute inset-x-0 h-px w-3/4 mx-auto -bottom-px shadow-2xl  bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

          <DialogTitle className="text-2xl font-thin px-6 pt-6 z-30">
            Connect your Solana wallet
          </DialogTitle>
          {connecting ? (
            <div className="z-30 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center gap-2">
              <GridLoader color="#4141d9" />
              <p className="whitespace-nowrap text-text_dimmed">
                Check your wallet provider
              </p>
            </div>
          ) : (
            <>
              <div className="z-30 flex flex-col justify-around gap-4 bg-footer_blue_lighter/40 px-8 pt-4 rounded-2xl sm:max-w-[350px]">
                <p className="text-xl">Detected</p>
                <div className="flex flex-col gap-2 items-center h-[140px] overflow-y-scroll ">
                  {wallets
                    .filter((wallet) => wallet.readyState === "Installed")
                    .map((wallet) => (
                      <WalletButton
                        key={wallet.adapter.name}
                        wallet={wallet}
                        handleSelect={handleSelectWallet}
                      />
                    ))}
                </div>
              </div>
              <div className="flex justify-center items-center z-30">
                <Accordion
                  type="single"
                  collapsible
                  className="shadow-none px-8 w-[350px] rounded-b-2xl mx-auto "
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="p-0 text-xl">
                      Other
                    </AccordionTrigger>
                    <AccordionContent className="overflow-x-scroll">
                      <div className=" w-[300px]  flex flex-nowrap justify-start ">
                        {wallets
                          .filter((wallet) => wallet.readyState === "Loadable")
                          .map((wallet) => (
                            <WalletButton
                              key={wallet.adapter.name}
                              wallet={wallet}
                              handleSelect={handleSelectWallet}
                              className=" hover:bg-transparent w-36 mx-4"
                            />
                          ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConnectButton;

function WalletButton(props: {
  wallet: any;
  className?: string;
  handleSelect: (wallet: Wallet) => void;
}) {
  return (
    <button
      onClick={() => {
        props.handleSelect(props.wallet);
      }}
      className={`w-40  flex gap-2 p-3 rounded-xl hover:bg-slate-500/20 items-center ${
        props.className ? props.className : ""
      }`}
    >
      <Image
        src={props.wallet.adapter.icon}
        alt={props.wallet.adapter.name}
        height={30}
        width={30}
      />
      <div className="flex grow justify-center items-center">
        {props.wallet.adapter.name}
      </div>
    </button>
  );
}
