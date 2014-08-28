           $(function () {
                //lvl2Select is set to the level 2 dropdown id
                var lvl2Select = $('#productId');
                lvl2Select.attr('disabled', true);
                //on change event handler for the level 1 dropdown
                $('#categoryId').change(function () {
                    //get the selected value
                    var categoryId = $(this).val();
                    //filter the level 2 dropdown list using the value from above. 
                    //L2 list is made by invoking code on GetProducts.cshtml
                    $.getJSON('/GetProducts/' + categoryId, function (products) {
                        lvl2Select.attr('disabled', false);
                        lvl2Select.empty();
                        lvl2Select.append($('<option/>').attr('value', '').text('-- Select Product --'));
                        $.each(products, function (index, product) {
                            lvl2Select.append($('<option/>').attr('value', product.ProductId).text(product.ProductName));
                        });
                        if( categoryId === ''){ lvl2Select.attr('disabled', true); }
                    });
                });
            });
 