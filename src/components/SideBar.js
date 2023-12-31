import "../css/components/sidebar.css"
import "../css/responsive.css"
import generateOperations from "./Generator"

export default function SideBar() {
    const allOperations = generateOperations();

    return (
        <aside>
            {allOperations.map((op) => (<>{op}</>))}
        </aside>
    )
} 