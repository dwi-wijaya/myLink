import LoginForm from "@/components/form/LoginForm"
import WithUnprotected from "@/hoc/withUnprotected"

const SignIn = () => {
    return (
        <main>
            <LoginForm />
        </main>
    )
}

export default WithUnprotected(SignIn)