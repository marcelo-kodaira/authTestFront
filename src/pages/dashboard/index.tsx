import {
    User,
  } from "lucide-react"
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useEffect, useState } from "react"
import { UserType } from "@/hooks/useAuth"
import Header from "@/components/Header"


export function DashboardPage() {
    const [users, setUsers] = useState<Partial<UserType[] | undefined>>([]);

    useEffect(() => {
        const mockedData = [
          { id: 1, name: 'John Doe', email: 'john@example.com'  },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com'  },
          { id: 3, name: 'Michael Brown', email: 'michael@example.com'  },
          { id: 4, name: 'Emily Johnson', email: 'emily@example.com' }
        ];
        
        // Simulando um fetch com um atraso
        setTimeout(() => {
          setUsers(mockedData);
        }, 1000);
      }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
       <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
              <CardTitle>Usuários</CardTitle>
              <CardDescription>
                Veja todos os usuários da plataforma.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                      <span className="sr-only">img</span>
                    </TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map(user => (
                    <TableRow key={user.id}>
                      <TableCell className="hidden sm:table-cell">
                        <User className="h-8 w-8 text-muted-foreground" />
                      </TableCell>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
}
