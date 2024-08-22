import React, { memo, Dispatch, SetStateAction, useEffect, useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Avatar,
} from "@windmill/react-ui";
import defaultUserImage from "@/assets/images/user-06.png";
import axios from "axios";
import { User } from "@/utils/types";

type Props = {
    title: string;
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    userId: number | null; // Allow `null` for initial state or cases where userId might not be provided
};

const UserProfileMode: React.FC<Props> = memo(({ title, isModalOpen, setIsModalOpen, userId }) => {
    const [userData, setUserData] = useState<User | undefined>(undefined);

    useEffect(() => {
        if (userId === null || !isModalOpen) return;

        axios
            .get(`/admins/show/${userId}`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(err => {
                console.error("Error fetching user data:", err);
            });
    }, [userId, isModalOpen]);

    const handleClose = () => setIsModalOpen(false);

    return (
        <Modal isOpen={isModalOpen} onClose={handleClose}>
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>
                {userData ? (
                    <div className="flex items-center text-sm">
                        <Avatar
                            className="hidden mr-3 md:block"
                            src={defaultUserImage}
                            alt={userData.name}
                        />
                        <div>
                            <p className="font-semibold">{userData.name}</p>
                            <p className="text-sm text-gray-600">{userData.email}</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-sm text-gray-600">Loading...</p>
                )}
            </ModalBody>
            <ModalFooter>
                <Button
                    className="w-full sm:w-auto"
                    layout="outline"
                    onClick={handleClose}
                >
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
});

export default UserProfileMode;
