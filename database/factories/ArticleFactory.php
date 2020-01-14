<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Article;
use Faker\Generator as Faker;

$factory->define(Article::class, function (Faker $faker) {
    return [
        'author_id' => mt_rand(1,2),
        'name' => $faker->lastName,
        'authors' => $faker->userName,
        'organisation' => $faker->company,
        'position' => $faker->jobTitle,
        'another_info' => $faker->text(250),
        'status' => mt_rand(1,3) ,
    ];
});
