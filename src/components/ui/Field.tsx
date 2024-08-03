import { forwardRef } from "react";
import { Input } from "./input";

type FieldProps = {
  error?: string | undefined;
} & React.ComponentPropsWithRef<"input">;

const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ error, ...props }, ref) => {
    return (
      <div className="w-full">
        <Input ref={ref} {...props} />
        {error && (
          <p className="text-xs text-semibold text-red-600 mt-1">{error}</p>
        )}
      </div>
    );
  }
);

export default Field;
