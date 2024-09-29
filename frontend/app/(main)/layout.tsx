import Header from "@/components/Templates/Header";
import { Suspense } from "react";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="px-8 flex-1 overflow-y-auto z-0">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
