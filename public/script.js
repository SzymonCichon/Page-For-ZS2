function Hide_Display(chainging_class, display)
{
    var a = document.getElementsByClassName(chainging_class)
    for(var i = 0; i<a.length; i++)
        {
            a[i].style.display=display
        }
}
var last_element
var Order_of_Operations =0;
var edit=false
window.onclick = e => {
    var Projekty_import = document.getElementsByClassName("Projects");
    var Projekty = []
    for(var i =0; i<Projekty_import.length; i++)
    {
        Projekty[i] = Projekty_import[i].id
    }
    for(var i = 0; i <Projekty.length; i++)
    {
        var text = Projekty[i]+"_Elements";
        if(e.target.id==Projekty[i] && edit==false)
        {
            if(last_element!=undefined)
            {
                last_element.style.display="none";
            }
            document.getElementById("baner").style.display="block";
            Hide_Display("Elements_CSS","none");
            Hide_Display(text,"block");
            
        }
        if(e.target.className==("Elements_CSS " +text) && edit==false)
        {
            if(last_element!=undefined)
            {
                last_element.style.display="none";
            }
            document.getElementById("baner").style.display="none"
            last_element = document.getElementById(e.target.id.replace("Element","Baner"))
            last_element.style.display="block";
        }
    }
    if(e.target.id=="admin" && Order_of_Operations==0)
    {
        Hide_Display("Elements_CSS","none");
        document.getElementById("baner").style.display="none";
        if(last_element!=undefined)
        {
            last_element.style.display="none";
        }
        document.getElementById("First_form").style.display="block"
        Order_of_Operations+=1;
        edit =true
    }
    if(e.target.id=="Submit_Password" && Order_of_Operations==1)
    {
        Hide_Display("Elements_CSS","none");
        document.getElementById("First_form").style.display="none"
        document.getElementById("Secound_form").style.display="block"



    }
    if(e.target.className=="Project_admin_del_class")
    {
        var Projct_handle = document.getElementById(e.target.getAttribute("data-project")+"_admin")
        Projct_handle.style.display="none"
        var data_to_serwer = document.getElementById("data_to_serwer")
        var new_value = data_to_serwer.value+"|DP/" + Projct_handle.getAttribute("data-projectname")
        data_to_serwer.setAttribute("value", new_value)
        
    }
    if(e.target.id=="add_project")
    {
        var data_to_serwer = document.getElementById("data_to_serwer")
        var number_of_projects = document.getElementsByClassName("Projects_admin").length
        var new_project = document.createElement("div");
        new_project.innerHTML = document.getElementById("Add_project_name").value + "<div id = 'Project_admin_del"+(number_of_projects+1)+"' class= 'Project_admin_del_class' data-project = 'Project"+(number_of_projects+1)+"'>del</div>";
        new_project.className = "Projects_admin";
        new_project.id = "Project"+ (number_of_projects+1)+"_admin"
        new_project.setAttribute("data-projectname", document.getElementById("Add_project_name").value)
        document.getElementById("Project"+ number_of_projects + "_admin").after(new_project)
        number_of_projects = document.getElementsByClassName("Projects_admin").length
        console.log(data_to_serwer.value);
        var new_value = data_to_serwer.value+"|AP/" + document.getElementById("Add_project_name").value
        data_to_serwer.setAttribute("value", new_value)
        console.log(data_to_serwer);
        
        
        
    }
} 