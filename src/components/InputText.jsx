export function InputText(props) {
    const {id, label, inputName, placeholder} = props
    return (
        <div className="flex flex-col">
            <label htmlFor="">{label}</label>
            <input type="text" id={id} inputName={inputName} placeholder={placeholder} />
        </div>
    )
}