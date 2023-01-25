import './index.css';
import dane from './dane.json';
function Generate_Secound_form()
{
    var wysw =""
    wysw+="<div id = 'Projekty_admin'>"
    for(var i =0; i<dane.number_of_projects; i++)
    {
        wysw+="<div id = 'Project"+(i+1)+"_admin' class='Projects_admin' data-projectname = '"+dane.project[i].project_name+"'>"+dane.project[i].project_name+"<div id = 'Project_admin_del"+(i+1)+"' class= 'Project_admin_del_class' data-project = 'Project"+(i+1)+"'>del</div></div>"
    }
    wysw+="<br/>Nazwa Projektu<input type ='text' id = 'Add_project_name'/><div id='add_project'>Dodaj projekt</div>"
    wysw+="</div>";
    return(
        <div dangerouslySetInnerHTML={{__html:wysw}}/>
    )
}
function Secound_form()
{
    return(
        <Generate_Secound_form/>
    );
}
export default Secound_form;