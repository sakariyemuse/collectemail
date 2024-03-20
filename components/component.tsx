/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/IFIIBMUnRc8
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            The Platform for Rapid Progress
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Let your team focus on shipping features instead of managing infrastructure with automated CI/CD, built-in
            testing, and integrated collaboration.
          </p>
        </div>
        <form className="mx-auto max-w-sm space-y-4">
          <div className="space-y-2">
            <Label className="sr-only" htmlFor="email">
              Enter your email
            </Label>
            <Input className="max-w-lg" id="email" placeholder="Enter your email" required type="email" />
          </div>
          <Button className="w-full" type="submit">
            Sign Up
          </Button>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Sign up to get notified when we launch.
            <Link className="underline underline-offset-2" href="#">
              Terms & Conditions
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}