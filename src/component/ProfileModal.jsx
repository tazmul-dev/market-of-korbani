"use client";
import React from 'react';
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
const ProfileModal = () => {

    const handalProfileUpdet = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value

        // console.log(name, image)
        await authClient.updateUser({
            image: image,
            name: name,
        })
    }
    return (
        <Modal>
            <Button variant="secondary">Updete profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                {/* <Envelope className="size-5" /> */}
                            </Modal.Icon>
                            <Modal.Heading>Updete profile</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handalProfileUpdet} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="text">
                                        <Label>Image</Label>
                                        <Input placeholder="Enter your image url" />
                                    </TextField>


                                    <Button type='submit' slot="close">Updete</Button>

                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default ProfileModal;