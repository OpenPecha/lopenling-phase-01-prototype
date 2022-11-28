import { Form } from "@remix-run/react";

export default function Header({ user }) {
  if (user)
    return (
      <Form method="post">
        <input type="text" name="logout" defaultValue={"logout"} hidden />
        <button type="submit">logout {user.name}</button>
      </Form>
    );

  if (!user)
    return (
      <>
        <Form method="post">
          <input type="text" name="login" defaultValue={"login"} hidden />
          <button type="submit">login </button>
        </Form>
        <a href="https://lopenling.org/signup">signup</a>
      </>
    );
}
