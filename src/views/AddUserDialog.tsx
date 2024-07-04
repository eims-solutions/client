import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddUserDialog() {
  return (
    <>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Users</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
            {/* Make changes to your profile here. Click save when you're done. */}
            </DialogDescription>
        </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="first_name" className="text-right">
            First Name
            </Label>
            <Input
            id="first_name"
            // defaultValue="Pedro Duarte"
            className="col-span-3"
            />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="middle_name" className="text-right">
            Middle Name
            </Label>
            <Input
            id="middle_name"
            // defaultValue="Pedro Duarte"
            className="col-span-3"
            />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="last_name" className="text-right">
            Last Name
            </Label>
            <Input
            id="last_name"
            // defaultValue="Pedro Duarte"
            className="col-span-3"
            />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
            Description
            </Label>
            <Input
            id="description"
            // defaultValue="Pedro Duarte"
            className="col-span-3"
            />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="contact" className="text-right">
            Contact Number
            </Label>
            <Input
            id="contact"
            // defaultValue="@peduarte"
            className="col-span-3"
            />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
            Email
            </Label>
            <Input
            id="email"
            // defaultValue="@peduarte"
            className="col-span-3"
            />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
				</DialogContent>
      </Dialog>
    </>
  )
}