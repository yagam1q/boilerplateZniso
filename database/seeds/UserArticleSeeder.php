<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class UserArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('articles')->insert([
            'author_id' => mt_rand(1,2),
            'name' => Str::random(10),
            'authors' => Str::random(50),
            'organisation' => Str::random(15),
            'position' => Str::random(5),
            'another_info' => Str::random(100),
            'status' => mt_rand(1,4),
            'fileName' => null,
            'fileOriginalName' => null,
        ]);

    }
}
