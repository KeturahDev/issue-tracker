"use client";
import { AlertDialog, Box, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const handleDeletion = async () => {
    await axios.delete(`/api/issues/${issueId}`);
    router.push("/issues");
    router.refresh();
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Delete Issue</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete this issue? This action cannot be
          undone.
        </AlertDialog.Description>
        <Flex gap="3" className="mt-4">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button onClick={handleDeletion} color="red">
              Delete Issue
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
