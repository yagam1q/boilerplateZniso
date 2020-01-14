<?php

use Illuminate\Database\Seeder;


class ArticleStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('article_statuses')->insert([
            'name' => 'Принято',
        ]);
        DB::table('article_statuses')->insert([
            'name' => 'В обработке',
        ]);
        DB::table('article_statuses')->insert([
            'name' => 'Закрыто',
        ]);
    }
}
