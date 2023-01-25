import './index.css';
import dane from './dane.json';
function Check_Element_Type(Element_type, Element_value, position)
{
    if (Element_type == "text") {
        return("<div class = '"+position+"'>" + Element_value + "</div>")
    }
    if (Element_type == "img") {
        return("<img src = '" + Element_value + "' class = '"+position+" class_img'/>")
    }
    if (Element_type == "video") {
        return("<video class = '"+position+"' controls><source src='" + Element_value + "' type='video/mp4'></video>")
    }
}

function Generate_Baner_Replacement()
{
    var number_of_elements
    var wys = "";
    wys+="<div id = 'Baner_Replacement'>";
    for(var i = 0; i <dane.number_of_projects; i++)
    {
        for(var a=0; a<dane.project[i].number_of_elements; a++)
        {
            var current_element = dane.project[i].names_of_elemets[a];
            wys+="<div id = 'BanerP"+(i+1)+"E"+(a+1)+"' class = 'Baner_Replacement_Elements'>";
            wys+="<div class = 'Banner_Header'>"+current_element.element_name+"</div>"
            var tab = ["lu", "ru", "ld", "rd"];
            
            if(current_element.lu!=undefined)
            {
                wys+=Check_Element_Type(current_element.lu_type, current_element.lu, "lu")
            }
            if(current_element.ru!=undefined)
            {
                wys+=Check_Element_Type(current_element.ru_type, current_element.ru,"ru")
            }
            if(current_element.ld!=undefined)
            {
                wys+=Check_Element_Type(current_element.ld_type, current_element.ld,"ld")
            }
            if(current_element.rd!=undefined)
            {
                wys+=Check_Element_Type(current_element.rd_type, current_element.rd,"rd")
            }
            wys+="</div>";
        }
    }
    wys+="<div id='admin'>"
    wys+="</div>";
    return(
        <div dangerouslySetInnerHTML={{__html:wys}}/>
    )
}
function Baner_Replacement()
{
    return(
        <Generate_Baner_Replacement/>
    );
}



export default Baner_Replacement;