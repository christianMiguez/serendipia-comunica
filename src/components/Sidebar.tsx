import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <form className="sticky top-4 space-y-4">
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <Input placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Textarea placeholder="Message" />
        <Button type="submit" className="w-full">Send</Button>
      </form>
    </aside>
  )
}
