'use client'
// import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField, toast} from "@heroui/react";


const Smodal = () => {
  const handaleBook = (e) =>{
    e.preventDefault()
    toast.success('submited success')
  }
    return (
         <Modal>
      <Button variant="secondary">book Now</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                {/* <Envelope className="size-5" /> */}
              </Modal.Icon>
              <Modal.Heading>Book now</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handaleBook} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <TextField className="w-full" name="phone" type="tel">
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  <TextField className="w-full" name="phone" type="tel">
                    <Label>Address</Label>
                    <Input placeholder="Enter your address" />
                  </TextField>
                  <Button type="submit" slot="close">Submit</Button>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
             
              
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default Smodal;