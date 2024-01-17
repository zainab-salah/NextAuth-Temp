"use client";

import { signIn} from "next-auth/react";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  className?: string;
  callbackUrl?: string;
  error?: string;
};

const LoginForm = (props: Props) => {
  const router = useRouter();
  const { toast } = useToast();

  const formSchema = yup.object({
    phone: yup
      .number()
      .typeError("الرجاء ادخال رقم صالح")
      .required("رقم الهاتف مطلوب"),
    password: yup.string().required("كلمة المرور مطلوبة"),
  });

  const form = useForm<yup.InferType<typeof formSchema>>({
    resolver: yupResolver(formSchema),
  });

  async function onSubmit(values: yup.InferType<typeof formSchema>) {
    const res = await signIn("credentials", {
      phone: values.phone,
      password: values.password,
      redirect: false,
    });

    if (!res?.error) {
      router.push(props.callbackUrl ?? "http://localhost:3000");
      toast({
        variant: "success",
        title: "تم الدخول بنجاح!",
      });
    } else {
      toast({
        variant: "destructive",
        title: "حصل خطأ",
        description: "يرجى التحقق من المدخلات مرة اخرى",
      });
    }
  }

  return (
    <div className="md:max-w-[50%] mx-auto flex flex-col gap-9">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-semibold text-xl text-center text-black dark:text-white">
            تسجل الدخول
          </h3>
        </div>
        {!!props.error && (
          <p className="bg-red-100 text-red-600 text-center p-2">
            فشل التحقق من الهوية
          </p>
        )}

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" space-y-5.5  p-6.5"
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="رقم الهاتف"
                      type="tel"
                      className="w-full rounded border-[1.5px] placeholder:text-right border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-full rounded border-[1.5px] placeholder:text-right border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      type="password"
                      placeholder="كلمة المرور"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-5 mb-5.5 rtl flex items-center justify-between">
            
              <Link href="#" className="text-sm text-primary">
                نسيت كلمة المرور؟
              </Link>
            </div>
            <Button
              className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
              type="submit"
            >
              تسجيل
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
