import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface props {
  className?: string;
}
export default function Education({ className }: props) {
  return (
    <div
      className={cn(
        className,
        "h-full w-full flex flex-row justify-center items-center gap-10"
      )}
    >
      <div className="h-2/3 flex flex-col justify-between">
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>BTech in CSE</CardTitle>
          </CardHeader>
          <CardContent>
            <p>LPU </p>
          </CardContent>
        </Card>
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>BTech in CSE</CardTitle>
          </CardHeader>
          <CardContent>
            <p>LPU </p>
          </CardContent>
        </Card>
      </div>
      <div className="h-2/3 bg-white w-[1px] rounded-[10px]"></div>
      <div className="h-2/3 flex flex-col justify-around">
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>BTech in CSE</CardTitle>
          </CardHeader>
          <CardContent>
            <p>LPU </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
