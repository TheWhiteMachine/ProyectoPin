<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Contact;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('contacts',function(){
    return Contact::all();
});
Route::get('contacts/(id)',function($id){
return Contact::find($id);
});
Route::post('contacts',function(Request $request){
    return Contact::create($request->all());
})->middleware("cors");
Route::put('contacts/(id)',function(Request $request, $id){
    $contact=Contact::findOrFail($id);
    $contact->update($request->all());
    return $contact;
});
Route::delete('contacts/(id)',function(Request $id){
    Contact::find($id)->delete();
    return 204;
});