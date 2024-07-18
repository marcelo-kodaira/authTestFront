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
import { editUserSchema } from "./editUser.schema";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import Header from "@/components/Header";

export function EditUserPage() {
  type EditUserFormData = z.infer<typeof editUserSchema>;

  const [user, setUser] = useState<Partial<any>>({});

  const form = useForm<EditUserFormData>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  useEffect(() => {
    const mockedData = { name: 'John Doe', email: 'john@example.com' };

    setTimeout(() => {
      setUser(mockedData);
      form.reset(mockedData);
    }, 5000);
  }, [form]);
  
  const { handleEditUser, handleDeleteUser } = useAuth();



  const onSubmit = (values: EditUserFormData) => {
    handleEditUser(values);
  };

  return (
    <div className="w-full">
      <div className="mb-4"></div>
      <Header />
      <div className="flex items-center justify-center py-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Configurações de conta</h1>
                <p className="text-sm text-muted-foreground">
                  Edite os detalhes da sua conta
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" variant="outline" className="w-full">
                  Alterar
                </Button>
              </div>
              <Button variant="destructive" onClick={handleDeleteUser}>
                Apagar conta
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
