local p = {}

function p.ref( frame )
    -- Basado en: https://en.wikipedia.org/wiki/Module:Bibleverse
    local targs = frame:getParent().args
    local ab = targs[1]
    local name = ''
    local chapter = ''
    local ver = ''
    if targs[2] ~= nil then
        chapter = targs[2]
    end
    if targs[3] ~= nil then
        ver = targs[3]
    end
    if ab == 'LU' then
        name = 'El_Libro_de_Urantia_Doc'
    elseif ab == 'Gn' then
        name = 'Génesis'
    elseif ab == 'Ex' then
        name = 'Éxodo'
    elseif ab == 'Lv' then
        name = 'Levítico'
    elseif ab == 'Nm' then
        name = 'Números'
    elseif ab == 'Dt' then
        name = 'Deuteronomio'
    elseif ab == 'Jos' then
        name = 'Josué'
    elseif ab == 'Jue' then
        name = 'Jueces'
    elseif ab == 'Rt' then
        name = 'Rut'
    elseif ab == '1 Sam' then
        name = 'Samuel_I'
    elseif ab == '2 Sam' then
        name = 'Samuel_II'
    elseif ab == '1 Re' then
        name = 'Reyes_I'
    elseif ab == '2 Re' then
        name = 'Reyes II'
    elseif ab == '1 Cr' then
        name = 'Crónicas_I'
    elseif ab == '2 Cr' then
        name = 'Crónicas_II'
    elseif ab == 'Esd' then
        name = 'Esdras'
    elseif ab == 'Neh' then
        name = 'Nehemías'
    elseif ab == 'Est' then
        name = 'Ester'
    elseif ab == '1 Mac' then
        name = 'Macabeos_I'
    elseif ab == '2 Mac' then
        name = 'Macabeos_II'
    elseif ab == 'Job' then
        name = 'Job'
    elseif ab == 'Sal' then
        name = 'Salmos'
    elseif ab == 'Pr' then
        name = 'Proverbios'
    elseif ab == 'Ec' then
        name = 'Eclesiastés'
    elseif ab == 'Cnt' then
        name = 'Cantar_de_los_Cantares'
    elseif ab == 'Eclo' then
        name = 'Eclesiástico'
    elseif ab == 'Sab' then
        name = 'Sabiduría'
    elseif ab == 'Is' then
        name = 'Isaías'
    elseif ab == 'Jer' then
        name = 'Jeremías'
    elseif ab == 'Lm' then
        name = 'Lamentaciones_de_Jeremías'
    elseif ab == 'Bar' then
        name = 'Baruc'
    elseif ab == 'Ez' then
        name = 'Ezequiel'
    elseif ab == 'Dn' then
        name = 'Daniel'
    elseif ab == 'Os' then
        name = 'Oseas'
    elseif ab == 'Jl' then
        name = 'Joel'
    elseif ab == 'Am' then
        name = 'Amós'
    elseif ab == 'Abd' then
        name = 'Abdías'
    elseif ab == 'Jon' then
        name = 'Jonás'
    elseif ab == 'Miq' then
        name = 'Miqueas'
    elseif ab == 'Nah' then
        name = 'Nahum'
    elseif ab == 'Hab' then
        name = 'Habacuc'
    elseif ab == 'Sof' then
        name = 'Sofonías'
    elseif ab == 'Hag' then
        name = 'Hageo'
    elseif ab == 'Zac' then
        name = 'Zacarías'
    elseif ab == 'Mal' then
        name = 'Malaquías'
    elseif ab == 'Mt' then
        name = 'Evangelio_de_Mateo'
    elseif ab == 'Mc' then
        name = 'Evangelio_de_Marcos'
    elseif ab == 'Lc' then
        name = 'Evangelio_de_Lucas'
    elseif ab == 'Jn' then
        name = 'Evangelio_de_Juan'
    elseif ab == 'Hch' then
        name = 'Hechos_de_los_Apóstoles'
    elseif ab == 'Ro' then
        name = 'Epístola_a_los_Romanos'
    elseif ab == '1 Co' then
        name = 'Epístola_a_los_Corintios_I'
    elseif ab == '2 Co' then
        name = 'Epístola_a_los_Corintios_II'
    elseif ab == 'Gl' then
        name = 'Epístola_a_los_Gálatas'
    elseif ab == 'Ef' then
        name = 'Epístola_a_los_Efesios'
    elseif ab == 'Flp' then
        name = 'Epístola_a_los_Filipenses'
    elseif ab == 'Col' then
        name = 'Epístola_a_los_Colosenses'
    elseif ab == '1 Ts' then
        name = 'Epístola_a_los_Tesalonicenses_I'
    elseif ab == '2 Ts' then
        name = 'Epístola_a_los_Tesalonicenses_II'
    elseif ab == '1 Ti' then
        name = 'Epístola_a_Timoteo_I'
    elseif ab == '2 Ti' then
        name = 'Epístola_a_Timoteo_II'
    elseif ab == 'Tit' then
        name = 'Epístola_a_Tito'
    elseif ab == 'Flm' then
        name = 'Epístola_a_Filemón'
    elseif ab == 'Heb' then
        name = 'Epístola_a_los_Hebreos'
    elseif ab == 'Stg' then
        name = 'Epístola_de_Santiago'
    elseif ab == '1 P' then
        name = 'Epístola_de_Pedro_I'
    elseif ab == '2 P' then
        name = 'Epístola_de_Pedro_II'
    elseif ab == '1 Jn' then
        name = 'Epístola_de_Juan_I'
    elseif ab == '2 Jn' then
        name = 'Epístola_de_Juan_II'
    elseif ab == '3 Jn' then
        name = 'Epístola_de_Juan_III'
    elseif ab == 'Jud' then
        name = 'Epístola_de_Judas'
    elseif ab == 'Ap' then
        name = 'Apocalipsis_de_Juan'
    elseif ab == 'Bel' then
        name = 'Historia_de_Bel_y_el_Dragón'
    elseif ab == 'Man' then
        name = 'Oración_de_Manasés'
    elseif ab == 'Tb' then
        name = 'Tobit'
    elseif ab == '1 Hen' then
        name = 'Enoc'
    elseif ab == 'AsMo' then
        name = 'Asunción_de_Moisés'
    else
        name = 'El_Libro_de_Urantia_Doc'
    end
    local url = name .. '_' .. chapter
    local text = ab .. ' ' .. chapter
    local v = ''
    
    if name == 'El_Libro_de_Urantia_Doc' then
        -- Falta de hacer la extracción del rango de párrafos
    else
        -- Extraemos el primer versículo del rango de versículos, si hay
        if ver ~= '' then
            local ver2 = string.gsub(string.gsub(ver, '-', ' '), ',', ' ')
            for token in string.gmatch(ver2, "[^%s]+") do
                if v == '' then
                    v = token
                end
            end
            if v ~= '' then
                url = url .. '#' .. v
            end
            text = text .. ':' .. ver
        end
    end
    return '[[' .. url .. '|' .. text .. ']]'
end

return p