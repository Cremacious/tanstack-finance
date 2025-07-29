import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import TransactionForm, {
  transactionFormSchema,
} from '~/components/transaction-form';
import { getCategories } from '~/data/getCategories';
import { fa } from 'zod/v4/locales';
import z from 'zod';

export const Route = createFileRoute(
  '/_authed/dashboard/transactions/new/_layout/'
)({
  component: RouteComponent,
  loader: async () => {
    const categories = await getCategories();
    return { categories };
  },
});

function RouteComponent() {
  const { categories } = Route.useLoaderData();

  const handleSubmit = async (data: z.infer<typeof transactionFormSchema>) => {
    console.log('data:', { data });
  };

  return (
    <Card className="max-w-screen-md mt-4">
      <CardHeader>
        <CardTitle>New Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <TransactionForm onSubmit={handleSubmit} categories={categories} />
      </CardContent>
    </Card>
  );
}
