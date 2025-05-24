export default function TabButton({children, onSelect , isSelected}){
    console.log("tabbutton is renderring")
    return(
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}