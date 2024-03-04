import { useAnchorWallet } from "@solana/wallet-adapter-react";
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
const ConnectButton = () => {
  const anchorWallet = useAnchorWallet();
  const [copied, setIsCopied] = useState(false);

  const computeWalletName = (pubKey: string) =>
    pubKey.slice(0, 4) + "..." + pubKey.slice(-4);

  const handleCopyPubKey = () => {
    if (!anchorWallet) return;
    navigator.clipboard.writeText(anchorWallet.publicKey.toBase58());
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  if (anchorWallet)
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
                  {computeWalletName(anchorWallet.publicKey.toBase58())}
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
    <WalletModalButton
      style={{
        // backgroundColor: "white",
        // color: "#171717",
        // borderRadius: 0,
        // border: "2px solid #9c9c9c",
        // whiteSpace: "nowrap",
        backgroundColor: "transparent",
        width: "auto",
      }}
    >
      <Button borderRadius="0" className="bg-slate-900 text-white  text-[16px]">
        Connect wallet
      </Button>
    </WalletModalButton>
  );
};

export default ConnectButton;
