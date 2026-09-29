import Image from "next/image";
import { auth } from "@/auth"

// Zeigt das Profilbild des eingeloggten Users (falls vorhanden)
export default async function UserAvatar() {
  const session = await auth()

  // Kein User eingeloggt → nichts rendern
  if (!session?.user) return null

  return (
    <div>
      {session.user.image ? (
        <Image src={session.user.image} alt="User Avatar" width={40} height={40} />
      ) : null}
    </div>
  )
}