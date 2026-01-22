import type { Meta, StoryObj } from "@storybook/react";
import AppFeaturesSection from "./AppFeaturesSection";
import { Zap, Shield, RefreshCw, Bell, Cloud, Tablet } from "lucide-react";

const meta: Meta<typeof AppFeaturesSection> = {
  title: "Pages/Applications/AppFeatures/Overview",
  component: AppFeaturesSection,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppFeaturesSection>;

export default meta;
type Story = StoryObj<typeof AppFeaturesSection>;

export const Bosnian: Story = {
  args: {
    title: "Funkcionalnosti",
    titleGradient: "aplikacija",
    features: [
      { icon: Zap, title: "Native performanse", desc: "Brze i responzivne aplikacije" },
      { icon: Shield, title: "Sigurnost", desc: "Biometrija i enkripcija" },
      { icon: RefreshCw, title: "Offline mod", desc: "Radi i bez interneta" },
      { icon: Bell, title: "Push notifikacije", desc: "Angažirajte korisnike" },
      { icon: Cloud, title: "Cloud sync", desc: "Sinkronizacija podataka" },
      { icon: Tablet, title: "Tablet podrška", desc: "Optimizirano za sve ekrane" },
    ],
  },
};

export const English: Story = {
  args: {
    title: "Features",
    titleGradient: "included",
    features: [
      { icon: Zap, title: "Native performance", desc: "Fast and responsive apps" },
      { icon: Shield, title: "Security", desc: "Biometrics and encryption" },
      { icon: RefreshCw, title: "Offline mode", desc: "Works without internet" },
      { icon: Bell, title: "Push notifications", desc: "Engage your users" },
      { icon: Cloud, title: "Cloud sync", desc: "Data synchronization" },
      { icon: Tablet, title: "Tablet support", desc: "Optimized for all screens" },
    ],
  },
};
