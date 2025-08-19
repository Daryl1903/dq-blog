import { handleSubmission } from "@/app/utils/actions";
import { SubmitButton } from "@/components/submit-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Create() {

  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Create Post</CardTitle>
        <CardDescription>Create a new post to share with the word</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-4" action={handleSubmission}>
          <div className="flex flex-col gap-2">
            <Label>Title</Label>
            <Input type="text" name="title" placeholder="Title" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Content</Label>
            <Textarea name="content" placeholder="Content" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Image URL</Label>
            <Input type="url" name="url" placeholder="Image URL" required />
          </div>

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}