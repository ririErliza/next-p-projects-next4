"use client";

import { useRouter } from "next/navigation";

export default function AdminAllProducts() {
  const router = useRouter();
  return (
    <div>
      AdminAllProducts
      <button
        onClick={() => router.push("/admin-view")}
        className={
          "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
        }
      >
        Admin View
      </button>
    </div>
  );
}
