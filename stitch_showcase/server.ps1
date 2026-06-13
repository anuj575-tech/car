$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8081/")
$listener.Start()
Write-Host "Listening on http://localhost:8081/"

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        try {
            $localPath = $request.Url.LocalPath.TrimStart('/')
            if ($localPath -eq "") { $localPath = "index.html" }
            $filePath = Join-Path $pwd $localPath
            
            if (Test-Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                switch ($ext) {
                    ".html" { $response.ContentType = "text/html" }
                    ".css"  { $response.ContentType = "text/css" }
                    ".js"   { $response.ContentType = "application/javascript" }
                    ".jpg"  { $response.ContentType = "image/jpeg" }
                    ".png"  { $response.ContentType = "image/png" }
                    default { $response.ContentType = "application/octet-stream" }
                }
                
                $content = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentLength64 = $content.Length
                $response.OutputStream.Write($content, 0, $content.Length)
                $response.StatusCode = 200
            } else {
                $response.StatusCode = 404
            }
        } catch {
            # Ignore client disconnections or write errors
        } finally {
            try { $response.Close() } catch {}
        }
    }
} finally {
    $listener.Stop()
}
