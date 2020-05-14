# Если выполнение сценариев отключено в этой системе
# От имени администратора выполняем: Set-ExecutionPolicy RemoteSigned
# [A] - Для всех

$Source = "dist"
$Destination = "..\..\Scripts\bundle"
$date = Get-Date -DisplayHint Date
$rorocopyParams = "/E"

npm install
npm run build

try
{
    Remove-Item $Destination -Recurse -Force -Confirm:$false
    echo ""
    echo [System.Environment]::NewLine " \n$date Success: Удаление: $Destination завершено"
    New-Item -Path $Destination -ItemType 'Directory' -Force
    echo ""
    echo "$date Success: Новая папка: $Destination создана"
}
catch
{
    echo "$date Error: $($_.Exception.Message)"
}

robocopy $Source $Destination $rorocopyParams
Read-Host -Prompt "Нажмите Enter"
