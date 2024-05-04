import SigninForm from "@/components/form/SigninForm"
import WithUnprotected from "@/hoc/withUnprotected"

const SignIn = () => {
    return (
        <main>
            <SigninForm />
        </main>
    )
}

export default WithUnprotected(SignIn)