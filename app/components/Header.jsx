import { Form, useLocation } from "@remix-run/react";

export default function Header({ user }) {
  const location = useLocation();

  if (user)
    return (
      <>
        <div>{user.name}</div>
        <Form method="post">
          <input type="hidden" name="logout" defaultValue={"logout"} />
          <input
            type="hidden"
            name="redirectTo"
            defaultValue={location.pathname}
          />
          <button type="submit">logout</button>
        </Form>
      </>
    );

  if (!user)
    return (
      <>
        <Form method="post">
          <input type="hidden" name="login" defaultValue={"login"} />
          <input
            type="hidden"
            name="redirectTo"
            defaultValue={location.pathname}
          />
          <button type="submit">login </button>
        </Form>
        <a href="https://lopenling.org/signup">signup</a>
      </>
    );
}
