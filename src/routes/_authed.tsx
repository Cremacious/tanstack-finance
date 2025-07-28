import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import { fa } from 'zod/v4/locales';

export const Route = createFileRoute('/_authed')({
  beforeLoad: ({ context }) => {
    if (!context.userId) {
      redirect({
        to: '/',
        throw: true,
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div><Outlet/></div>;
}
