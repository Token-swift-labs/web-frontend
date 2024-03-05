import { useAnchorWallet, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import {
  WalletDisconnectButton,
  WalletModalButton,
  WalletIcon,
} from "@solana/wallet-adapter-react-ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Clipboard } from "@phosphor-icons/react";
import { Button } from "../ui/moving-border";
import Image from "next/image";
// import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BackgroundGradient } from "../ui/background-gradient";
import { GridLoader } from "react-spinners";
const ConnectButton = () => {
  // const anchorWallet = useAnchorWallet();
  const { select, wallets, publicKey, disconnect, connecting, connected } =
    useWallet();
  useEffect(() => {
    console.log("wallets", wallets);
  }, [wallets]);
  useEffect(() => {
    console.log(connecting, connected);
  }, [connecting, connected]);
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
            <WalletDisconnectButton />
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
        <DialogContent className="text-white sm:max-w-[350px] bg-footer_blue min-h-[200px]">
          <DialogTitle className="text-2xl font-thin ">
            Connect your Solana wallet
          </DialogTitle>
          {connecting ? (
            <div className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center gap-2">
              <GridLoader color="#4141d9" />
              <p className="whitespace-nowrap text-text_dimmed">
                Check your wallet provider
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-4 ">
                <p>Detected wallets</p>
                <div className="flex flex-col gap-2 items-center h-[150px] overflow-y-scroll">
                  {wallets
                    .filter((wallet) => wallet.readyState === "Installed")
                    .map((wallet) => (
                      <WalletButton
                        key={wallet.adapter.name}
                        wallet={wallet}
                        select={select}
                      />
                    ))}
                </div>
              </div>
              <Accordion type="single" collapsible className="shadow-none ">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Other wallets</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 gap-4 h-[140px] overflow-y-scroll">
                      {wallets
                        .filter((wallet) => wallet.readyState === "Loadable")
                        .map((wallet) => (
                          <WalletButton
                            key={wallet.adapter.name}
                            wallet={wallet}
                            select={select}
                            className="w-32 mx-auto"
                          />
                        ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConnectButton;

function WalletButton(props: { wallet: any; select: any; className?: string }) {
  return (
    <button
      onClick={() => {
        props.select(props.wallet.adapter.name);
      }}
      className={`w-40  flex gap-2 p-3 rounded-xl hover:bg-footer_blue_lighter items-center ${
        props.className && props.className
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
