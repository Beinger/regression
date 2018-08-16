<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<%Response.Charset="utf-8"%>
<%
dim xmlDoc
dim rootEl,fieldName,fieldValue,attID
dim p,i

'如果有错误发生，不允许程序终止
On Error Resume Next

Set xmlDoc = server.CreateObject("Microsoft.XMLDOM")
xmlDoc.preserveWhiteSpace=true

'创建并向文档添加根元素
Set rootEl = xmlDoc.createElement("customer")
xmlDoc.appendChild rootEl

'循环遍历 Form 集
for i = 1 To Request.Form.Count
  '除去表单中的 button 元素
  if instr(1,Request.Form.Key(i),"btn_")=0 then
    '创建 field 和 value 元素，以及 id 属性
    Set fieldName = xmlDoc.createElement("field")
    Set fieldValue = xmlDoc.createElement("value")
    Set attID = xmlDoc.createAttribute("id")
    '把当前表单域的名称设置为 id 属性的值
    attID.Text = Request.Form.Key(i)
    '把 id 属性添加到 field 元素
    fieldName.setAttributeNode attID
    '把当前表单域的值设置为 value 元素的值
    fieldValue.Text = Request.Form(i)
    '将 field 元素作为根元素的子元素进行添加
    rootEl.appendChild fieldName
    '将 value 元素作为 field 元素的子元素进行添加
    fieldName.appendChild fieldValue
  end if
next

'添加 XML processing instruction
'并把它加到根元素之前
Set p = xmlDoc.createProcessingInstruction("xml","version='1.0'","encoding='UTF-8'")
xmlDoc.insertBefore p,xmlDoc.childNodes(0)

'保存 XML 文件
xmlDoc.save "\Customer.xml"

'释放所有的对象引用
set xmlDoc=nothing
set rootEl=nothing
set fieldName=nothing
set fieldValue=nothing
set attID=nothing
set p=nothing

'测试是否有错误发生
if err.number<>0 then
  response.write("Error: No information saved.")
else
  response.write("Your information has been saved.")
end if
%>