"use client";

import { Button } from "../ui/Button";
import { GoogleIcon, FacebookIcon, AppleIcon } from "../ui/Icon";

export function SocialButtons() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
      <Button
        variant="secondary"
        fullWidth
        disabled
        leftIcon={<AppleIcon className="h-6 w-6" />}
        className="justify-center gap-2 sm:flex-1"
      >
        <span className="sm:hidden">Log in with Apple</span>
      </Button>

      <Button
        variant="secondary"
        fullWidth
        disabled
        leftIcon={<FacebookIcon className="h-6 w-6" />}
        className="justify-center gap-2 sm:flex-1"
      >
        <span className="sm:hidden">Log in with Facebook</span>
      </Button>

      <Button
        variant="secondary"
        fullWidth
        disabled
        leftIcon={<GoogleIcon className="h-6 w-6" />}
        className="justify-center gap-2 sm:flex-1"
      >
        <span className="sm:hidden">Log in with Google</span>
      </Button>
    </div>
  );
}
