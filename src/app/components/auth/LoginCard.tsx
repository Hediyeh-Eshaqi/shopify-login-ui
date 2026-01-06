"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Divider } from "../ui/Divider";
import { SocialButtons } from "./SocialButtons";
import { FooterLinks } from "./FooterLinks";
import { HelpLink } from "../ui/HelpLink";
import { PassKeyIcon } from "../ui/Icon";
import { ArrowLeftIcon } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";

export function LoginCard() {
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [errors, setErrors] = useState<{ email?: string; captcha?: string }>(
    {}
  );
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors: typeof errors = {};

    if (!email) nextErrors.email = "لطفا ایمیل خود را وارد کنید";
    else if (!/^\S+@\S+\.\S+$/.test(email))
      nextErrors.email = "آدرس ایمیل معتبر نیست";

    if (!captcha) nextErrors.captcha = "کد کپچا ضروری است";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);

    try {
      const res = await fetch("/test/api/login", {
        method: "POST",
        body: JSON.stringify({ email, captcha }),
      });

      const data = await res.json();
      console.log("Server response:", data);
    } catch (err) {
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full md:w-120 space-y-6 bg-white p-10 rounded-xl">
        <Link href="/">
          <Image
            src="https://shopify-assets.shopifycdn.com/accounts/production/theme_configuration/logo/oauth_provider/merchant/logo.svg?v=1631025778"
            alt="Log in to Shopify"
            width={92}
            height={40}
            priority
            className="w-23"
          />
        </Link>

        <div className="flex mb-6 mt-6">
          <div>
            <h1 className="text-2xl font-semibold text-[#303030] mb-0.5">
              ورود
            </h1>
            <h3 className="text-sm text-gray-600">ورود به شاپیفای</h3>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4" noValidate>
          <Input
            label="ایمیل"
            type="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <div>
            <ReCAPTCHA
              sitekey="This is a test"
              onChange={(token) => setCaptcha(token || "")}
            />
            {errors.captcha && (
              <p className="text-red-600 text-sm mt-1">{errors.captcha}</p>
            )}
          </div>

          <Button
            size="lg"
            fullWidth
            text={loading ? "Loading..." : "با ایمیل ادامه دهید"}
            disabled={loading}
            hoverIcon={<ArrowLeftIcon />}
          />
        </form>

        <Divider>or</Divider>

        <Button
          disabled
          fullWidth
          variant="secondary"
          leftIcon={<PassKeyIcon />}
          text="با کلید عبور وارد شوید"
          className="justify-center gap-2 mb-4"
        />

        <SocialButtons />

        <HelpLink
          text="اکانت ندارید؟"
          href="/signup"
          linkText="همین حالا عضو شوید"
        />

        <FooterLinks />
      </div>
    </div>
  );
}
