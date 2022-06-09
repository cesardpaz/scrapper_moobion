<?php 
require_once 'hquery/hquery.php';
$url_moobion = $_POST['url_moobion'];

$doc  = hQuery::fromUrl($url_moobion, ['Accept' => 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8' , 'user_agent' => 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36']);

$title     = $doc->find('h1')->text();
$content   = trim($doc->find('.entry')->html());
$image     = $doc->find('article.app figure img')->attr('src');
$imageFull = str_replace('-150x150', '', $image);

$infoList = $doc->find('.info-list li');
foreach ($infoList as $key => $info) {
    if( trim(strtolower($info->find('span')[0]->text())) == 'category' ) $category = $info->find('a')[0]->text();
    if( trim(strtolower($info->find('span')[0]->text())) == 'developer' ) $developer = $info->find('a')[0]->text();
}

$gallery = $doc->find('.gall img');
$listImgs = array();
$count = 0;
foreach ($gallery as $key => $gall) {
    if($count < 5)
    {
        $im = $gall->attr('src');
        $im = str_replace('-182x300', '', $im);
        $listImgs[] = $im;
        $count++;
    }   
}

$data = array(
    'title'     => $title,
    'content'   => $content,
    'image'     => $imageFull,
    'category'  => $category,
    'developer' => $developer,
);

$res = [
    'res' => $data,
];

header('Content-type: application/json; charset=utf-8');
echo json_encode($res);
exit();
