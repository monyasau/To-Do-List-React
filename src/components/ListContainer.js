export default function ListContainer({items, previousState, checkeditems}) {
return(
<>
<div className="border border-dark py-5">
 
{items}   
{previousState}
</div>
</>
)
}
