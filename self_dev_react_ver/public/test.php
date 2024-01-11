<?php

function getMetaData($url) {
    $content = file_get_contents($url);
    $doc = new DOMDocument();
    @$doc->loadHTML($content);
    
    $xpath = new DOMXPath($doc);
    
    // OG 태그 추출
    $query = '//meta[starts-with(@property, "og:")]';
    $metaOg = $xpath->query($query);
    
    $tags = [];
    foreach ($metaOg as $tag) {
        $tags[str_replace('og:', '', $tag->getAttribute('property'))] = $tag->getAttribute('content');
    }
    
    // Keywords 추출
    $keywords = $xpath->query('//meta[@name="keywords"]/@content')->item(0);
    if ($keywords) {
        $tags['keywords'] = $keywords->value;
    }
    
    return $tags;
}

$url = "https://yu-dev-record.tistory.com/"; // 외부 URL
$tags = getMetaData($url);

echo '<script>';
echo 'console.log("'.$tags.'")';
echo '</script>';
?>