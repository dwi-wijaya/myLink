import SignupForm from "@/components/form/SignupForm"
import WithUnprotected from "@/hoc/withUnprotected"

const Signup = () => {
    return (
        <main>
            <SignupForm />
        </main>
    )
}

export default WithUnprotected(Signup)