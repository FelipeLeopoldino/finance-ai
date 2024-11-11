import { auth } from "@clerk/nextjs/server";
import NavBar from "../_components/navbar";
import { redirect } from "next/navigation";

const SubscriptionsPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }
  return (
    <>
      <NavBar />
      <div>
        <h1>SubscriptionsPage</h1>
      </div>
    </>
  );
};

export default SubscriptionsPage;
