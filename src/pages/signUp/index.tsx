import SignUpSvg from "@/components/svg/signUp.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "./signup.schema";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export function SignUpPage() {
  type SignUpFormData = z.infer<typeof signUpSchema>;
  
  const navigate = useNavigate();

  const {handleSignUp} = useAuth()

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SignUpFormData) => {
    handleSignUp(values)
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <p className="text-sm text-muted-foreground">
                  Crie sua conta agora mesmo!
                </p>
              </div>
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome completo"
                          {...field} />
                      </FormControl>
                      <FormDescription>
                        Digite o seu nome.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="example@example.com"
                          {...field} />
                      </FormControl>
                      <FormDescription>
                        Digite o seu e-mail.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="********"
                          {...field} />
                      </FormControl>
                      <FormDescription>
                        Escolha uma senha.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Cadastrar
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Já tem uma conta?
              </div>
              <Button variant="ghost" onClick={()=> navigate("/login")}>
                Login
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="hidden bg-muted lg:block">
        <SignUpSvg />
      </div>
    </div>
  );
}
