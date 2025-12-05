import { HeatMap } from "@/components/features/HeatMap"
import { LiveContactList } from "@/components/features/LiveContactList"
import { ChatFeatures } from "@/components/features/ChatFeatures"

export default function FeaturesPage() {
  return (
    <main className="overflow-x-hidden">
      <HeatMap />
      <LiveContactList />
      <ChatFeatures />
      {/* Other feature sections will go here */}
    </main>
  )
} 