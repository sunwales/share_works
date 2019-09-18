<?php

    $curl = curl_init();  //初始化
    $format = curl_escape($curl ,$_POST['$format']);
    $filter = curl_escape($curl ,$_POST['$filter']);
    $url = 'http://data.gcis.nat.gov.tw/od/data/api/855A3C87-003A-4930-AA4B-2F4130D713DC?$format='.$format.'&$filter='.$filter;
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HEADER, 1);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');

    $response = curl_exec($curl);
    if (curl_error($curl)) {
        echo("something is error");
        curl_close($curl);
        return;
    }

    $header_size = curl_getinfo($curl,CURLINFO_HEADER_SIZE);
    // echo(json_encode(curl_getinfo($curl)));
    echo(substr($response, $header_size));
    curl_close($curl);

    return;

?>
