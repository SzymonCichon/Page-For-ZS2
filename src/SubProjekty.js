import './index.css';
import dane from './dane.json';
function Generate_Sub_Projects()
{
    var wys = ""
    wys+="<div id = 'Elements_Projects'>"
    for(var i =0; i<dane.number_of_projects; i++)
    {
        for(var a =0; a<dane.project[i].number_of_elements; a++)
        {
            wys+="<div id = '"+"Element"+("P"+(i+1)+"E"+(a+1))+"' class='Elements_CSS Project"+(i+1)+"_Elements'>"+dane.project[i].names_of_elemets[a].element_name+"</div>"
        }
    }
    wys+="</div>"
    return(
        <div dangerouslySetInnerHTML={{__html:wys}}/>
    )
}
function SubProjecty()
{
    return(
        <Generate_Sub_Projects/>
    );
}



export default SubProjecty;