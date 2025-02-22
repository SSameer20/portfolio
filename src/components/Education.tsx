import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface props {
  className?: string;
}

function EductaionCard({
  className,
  title,
  description,
}: {
  className?: string;
  title?: string;
  description?: string;
}) {
  return (
    <Card
      className={cn(
        className,
        "bg-transparent w-full h-full opacity-[0.6] hover:opacity-[1]"
      )}
    >
      <CardHeader>
        <CardTitle className="text-white font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-[rgba(255,255,255,0.8)] font-normal">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
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
        <motion.div className="h-1/3">
          <EductaionCard
            title="LPU"
            description="Completed my bachelors at lpu"
          />
        </motion.div>
        <motion.div className="h-1/3">
          <EductaionCard title="Brindavan" description="Completed my diploma" />
        </motion.div>
      </div>
      <div className="h-2/3 bg-white w-[1px] rounded-[10px]"></div>
      <div className="h-2/3 flex flex-col justify-around">
        <motion.div className="h-1/3">
          <EductaionCard title="De Paul" description="Completed my schooling" />
        </motion.div>
      </div>
    </div>
  );
}
