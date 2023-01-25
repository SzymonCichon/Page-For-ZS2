import './index.css';
import dane from './dane.json';
function Generate_Projects()
{
    var wysw =""
    wysw+="<div id = 'Projekty'>"
    for(var i =0; i<dane.number_of_projects; i++)
    {
        wysw+="<div id = '"+"Project"+(i+1)+"' class='Projects'>"+dane.project[i].project_name+"</div>"
    }
    wysw+="</div>";
    return(
        <div dangerouslySetInnerHTML={{__html:wysw}}/>
    )
    
}
function Projekty()
{
    return(
        <Generate_Projects/>
    );
}



export default Projekty;